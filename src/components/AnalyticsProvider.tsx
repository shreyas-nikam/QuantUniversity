/**
 * Analytics Provider Component
 * Initializes analytics services and provides tracking context
 */

import { createContext, useContext, useEffect, ReactNode } from 'react';
import { analyticsConfig, trackEvent, trackingHelpers, AnalyticsEvent } from '../data/analytics';

interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (pageName: string, pageUrl: string) => void;
  trackButtonClick: (buttonId: string, buttonText: string) => void;
  trackVideoPlay: (videoId: string, videoTitle: string) => void;
  trackFormSubmit: (formName: string, formType: string) => void;
  trackCourseEnrollment: (courseId: string, courseTitle: string, price: number) => void;
  trackDownload: (resourceType: string, resourceName: string) => void;
  trackSocialShare: (platform: string, contentType: string, contentId: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  useEffect(() => {
    // Helper to check if ID is valid (not a placeholder)
    const isValidId = (id: string | null | undefined): boolean => {
      if (!id) return false;
      // Check if it's a placeholder pattern (all X's or contains placeholder text)
      if (/^X+$/.test(id) || id.includes('XXXX')) return false;
      return true;
    };

    // Initialize Google Analytics 4
    if (isValidId(analyticsConfig.googleAnalyticsId) && !document.querySelector(`script[src*="gtag/js"]`)) {
      try {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalyticsId}`;
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          function gtag(...args: any[]) {
            (window as any).dataLayer.push(args);
          }
          (window as any).gtag = gtag;
          gtag('js', new Date());
          gtag('config', analyticsConfig.googleAnalyticsId, {
            send_page_view: false // We'll manually track page views
          });
        };
        
        script.onerror = () => {
          console.warn('Failed to load Google Analytics script');
        };
      } catch (error) {
        console.warn('Error initializing Google Analytics:', error);
      }
    }

    // Initialize Google Tag Manager
    if (isValidId(analyticsConfig.googleTagManagerId) && !document.querySelector(`script[src*="gtm.js"]`)) {
      try {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtm.js?id=${analyticsConfig.googleTagManagerId}`;
        script.async = true;
        document.head.appendChild(script);
        
        script.onerror = () => {
          console.warn('Failed to load Google Tag Manager script');
        };
      } catch (error) {
        console.warn('Error initializing Google Tag Manager:', error);
      }
    }

    // Initialize Meta Pixel
    if (isValidId(analyticsConfig.metaPixelId) && !(window as any).fbq) {
      try {
        const fbq = function(...args: any[]) {
          if ((window as any).fbq) {
            (window as any).fbq.callMethod 
              ? (window as any).fbq.callMethod.apply((window as any).fbq, args)
              : (window as any).fbq.queue.push(args);
          }
        };
        (window as any).fbq = fbq;
        (window as any).fbq.queue = [];
        (window as any).fbq.loaded = true;
        (window as any).fbq.version = '2.0';
        
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/fbevents.js';
        script.async = true;
        document.head.appendChild(script);
        
        script.onload = () => {
          (window as any).fbq('init', analyticsConfig.metaPixelId);
          (window as any).fbq('track', 'PageView');
        };
        
        script.onerror = () => {
          console.warn('Failed to load Meta Pixel script');
        };
      } catch (error) {
        console.warn('Error initializing Meta Pixel:', error);
      }
    }

    // Initialize LinkedIn Insight Tag
    if (isValidId(analyticsConfig.linkedInPartnerId) && !document.querySelector(`script[src*="li.lms-analytics"]`)) {
      try {
        (window as any)._linkedin_partner_id = analyticsConfig.linkedInPartnerId;
        (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
        (window as any)._linkedin_data_partner_ids.push((window as any)._linkedin_partner_id);
        
        const script = document.createElement('script');
        script.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
        script.async = true;
        document.head.appendChild(script);
        
        script.onerror = () => {
          console.warn('Failed to load LinkedIn Insight Tag script');
        };
      } catch (error) {
        console.warn('Error initializing LinkedIn Insight Tag:', error);
      }
    }
  }, []);

  const contextValue: AnalyticsContextType = {
    trackEvent,
    ...trackingHelpers
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
}

/**
 * Hook to use analytics in components
 */
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    // Return a no-op fallback instead of throwing error
    // This prevents crashes if provider is not available
    console.warn('useAnalytics called outside of AnalyticsProvider, returning no-op functions');
    return {
      trackEvent: () => {},
      trackPageView: () => {},
      trackButtonClick: () => {},
      trackVideoPlay: () => {},
      trackFormSubmit: () => {},
      trackCourseEnrollment: () => {},
      trackDownload: () => {},
      trackSocialShare: () => {}
    };
  }
  return context;
}

/**
 * Higher-order component to track clicks on any component
 */
interface WithClickTrackingProps {
  trackingId: string;
  trackingLabel?: string;
  onClick?: () => void;
}

export function withClickTracking<P extends object>(
  Component: React.ComponentType<P>,
  defaultTrackingLabel?: string
) {
  return function TrackedComponent(props: P & WithClickTrackingProps) {
    const { trackingId, trackingLabel, onClick, ...restProps } = props;
    const analytics = useAnalytics();

    const handleClick = () => {
      analytics.trackButtonClick(trackingId, trackingLabel || defaultTrackingLabel || trackingId);
      if (onClick) {
        onClick();
      }
    };

    return <Component {...(restProps as P)} onClick={handleClick} data-tracking-id={trackingId} />;
  };
}
