# Certificates Folder

This folder contains certificate images for the portfolio website.

## File Organization:
- Store all certificate images in this folder
- Use descriptive names like: `hackerrank-python.jpg`, `gssoc-2024.png`, etc.
- Supported formats: JPG, PNG, WEBP
- Recommended size: 800x600px or similar aspect ratio

## Adding New Certificates:
1. Save certificate image to this folder
2. Update the `certificates` array in `/src/components/Achievements.tsx`
3. Add new certificate object with:
   - id: unique identifier
   - name: certificate name
   - issuer: organization/company
   - date: year or date received
   - image: `/certificates/filename.jpg`
   - category: Programming, Open Source, Cloud, etc.

## Categories:
- Programming
- Open Source  
- Cloud
- Web Development
- AI/ML
- Cybersecurity
- Project Management
- Design
- Other

The system will automatically:
- Create filter buttons for categories
- Display certificate count in stats
- Handle image loading errors with fallback
- Provide modal view for detailed certificate viewing
