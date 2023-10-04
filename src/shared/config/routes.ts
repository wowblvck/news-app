type Id = number;

export const routes = {
  home: '/',
  feed: (id: Id): string => `/feed/${id}`,
  category: (category: string): string => `/category/${category}`,
  read_more: '/read-more',
  terms: '/terms',
  policy: '/private-policy',
  contacts: '/contacts',
  redaction: '/redaction',
  advertise: '/advertise',
};
