export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  priority?: number; // For custom ordering (lower number = higher priority)
  featured?: boolean; // For highlighting important certificates
}

export class CertificateManager {
  private certificates: Certificate[];

  constructor(certificates: Certificate[]) {
    this.certificates = certificates;
  }

  // Get certificates in display order (by priority, then by date, then by array position)
  getDisplayOrder(): Certificate[] {
    return [...this.certificates].sort((a, b) => {
      // Featured certificates first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // Then by priority (if set) - lower number = higher priority
      if (a.priority !== undefined && b.priority !== undefined) {
        return a.priority - b.priority;
      }
      if (a.priority !== undefined && b.priority === undefined) return -1;
      if (a.priority === undefined && b.priority !== undefined) return 1;

      // Then by date (newest first)
      const dateA = new Date(a.date).getFullYear();
      const dateB = new Date(b.date).getFullYear();
      return dateB - dateA;
    });
  }

  // Get certificates by category
  getByCategory(category: string): Certificate[] {
    if (category === "all") return this.getDisplayOrder();
    return this.getDisplayOrder().filter(cert => cert.category === category);
  }

  // Get all unique categories
  getCategories(): string[] {
    const categories = Array.from(new Set(this.certificates.map(cert => cert.category)));
    return ["all", ...categories.sort()];
  }

  // Add new certificate with auto-generated ID
  addCertificate(certificate: Omit<Certificate, 'id'>): Certificate {
    const maxId = Math.max(...this.certificates.map(cert => parseInt(cert.id) || 0));
    const newCertificate: Certificate = {
      ...certificate,
      id: (maxId + 1).toString()
    };
    this.certificates.push(newCertificate);
    return newCertificate;
  }

  // Update certificate by ID
  updateCertificate(id: string, updates: Partial<Certificate>): Certificate | null {
    const index = this.certificates.findIndex(cert => cert.id === id);
    if (index === -1) return null;
    
    this.certificates[index] = { ...this.certificates[index], ...updates };
    return this.certificates[index];
  }

  // Remove certificate by ID
  removeCertificate(id: string): boolean {
    const index = this.certificates.findIndex(cert => cert.id === id);
    if (index === -1) return false;
    
    this.certificates.splice(index, 1);
    return true;
  }

  // Get total count
  getTotalCount(): number {
    return this.certificates.length;
  }

  // Get count by category
  getCountByCategory(): Record<string, number> {
    const counts: Record<string, number> = { all: this.certificates.length };
    
    this.certificates.forEach(cert => {
      counts[cert.category] = (counts[cert.category] || 0) + 1;
    });
    
    return counts;
  }

  // Get featured certificates
  getFeaturedCertificates(): Certificate[] {
    return this.getDisplayOrder().filter(cert => cert.featured);
  }

  // Get recent certificates (last year)
  getRecentCertificates(): Certificate[] {
    const currentYear = new Date().getFullYear();
    return this.getDisplayOrder().filter(cert => {
      const certYear = new Date(cert.date).getFullYear();
      return certYear >= currentYear - 1;
    });
  }
}
