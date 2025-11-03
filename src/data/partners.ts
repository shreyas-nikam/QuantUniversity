// Central data source for partner logos and enterprise clients
// To add new partners, simply add them to this array

export interface Partner {
  name: string;
  category: 'client' | 'association' | 'technology';
}

export const partners: Partner[] = [
  { name: 'CFA Institute', category: 'association' },
  { name: 'GARP', category: 'association' },
  { name: 'Bank of America', category: 'client' },
  { name: 'Morgan Stanley', category: 'client' },
  { name: 'Goldman Sachs', category: 'client' },
  { name: 'JP Morgan', category: 'client' },
  { name: 'Citi', category: 'client' },
  { name: 'PRMIA', category: 'association' },
  { name: 'Wells Fargo', category: 'client' },
  { name: 'Deutsche Bank', category: 'client' },
  { name: 'HSBC', category: 'client' },
  { name: 'Barclays', category: 'client' }
];

// Helper functions
export const getPartnersByCategory = (category: Partner['category']) => 
  partners.filter(p => p.category === category);

export const getClientPartners = () => getPartnersByCategory('client');
export const getAssociationPartners = () => getPartnersByCategory('association');
export const getAllPartners = () => partners;
