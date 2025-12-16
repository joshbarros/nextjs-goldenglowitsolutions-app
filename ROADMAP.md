# GoldenGlow IT Solutions - Roadmap

## Pre-Launch Checklist

### Email Configuration (Resend)
- [ ] Verify domain `goldenglowitsolutions.com` at [resend.com/domains](https://resend.com/domains)
- [ ] Add DNS records provided by Resend:
  - TXT record for domain verification
  - MX record for receiving
  - SPF record for sending authentication
  - DKIM record for email signing
- [ ] Update `FROM_EMAIL` in `.env.local` to `contact@goldenglowitsolutions.com` after verification

### Content
- [ ] Add real client testimonials (currently commented out)
- [ ] Add portfolio projects with case studies (currently commented out)
- [ ] Add real company stats (currently commented out)
- [ ] Update founder name in `src/components/seo/JsonLd.tsx`

### SEO & Analytics
- [ ] Verify Plausible Analytics is tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile

### Deployment
- [ ] Configure VPS with Node.js 18+
- [ ] Set up PM2 for process management
- [ ] Configure Nginx as reverse proxy
- [ ] Set up SSL certificate (Let's Encrypt)
- [ ] Configure environment variables on server

---

## Future Enhancements

### Phase 1 - Post Launch
- [ ] Add blog content for SEO
- [ ] Implement newsletter signup
- [ ] Add live chat widget

### Phase 2 - Growth
- [ ] Multi-language support (PT-BR)
- [ ] Client portal for project tracking
- [ ] Automated proposal generation
