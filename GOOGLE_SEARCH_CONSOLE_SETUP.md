# Google Search Console Setup Guide for Moyahug

## 🎯 **Complete Google Search Console Optimization**

### **1. Initial Setup**

#### **A. Verify Your Website**
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your property: `https://moyahug.com`
3. Choose verification method:
   - **HTML file**: Upload `google-site-verification.html` to root
   - **HTML tag**: Already implemented in layout.js
   - **Google Analytics**: If you have GA4 connected

#### **B. Submit Sitemaps**
Submit these sitemaps in Search Console:
- `https://moyahug.com/sitemap.xml` (Main sitemap)
- `https://moyahug.com/sitemap-images.xml` (Image sitemap)

### **2. SEO Monitoring Setup**

#### **A. URL Inspection**
- Test individual URLs for indexing status
- Check for crawl errors
- Monitor mobile usability

#### **B. Performance Monitoring**
- Track search performance metrics
- Monitor click-through rates
- Analyze search queries

#### **C. Coverage Reports**
- Monitor indexed vs. non-indexed pages
- Check for crawl errors
- Track sitemap submission status

### **3. Content Optimization**

#### **A. Core Web Vitals**
Your Next.js 15 setup already optimizes for:
- ✅ **LCP (Largest Contentful Paint)**: Image optimization
- ✅ **FID (First Input Delay)**: Static generation
- ✅ **CLS (Cumulative Layout Shift)**: Proper image dimensions

#### **B. Mobile-First Indexing**
- ✅ Responsive design implemented
- ✅ Mobile-friendly navigation
- ✅ Touch-friendly interface

#### **C. Page Experience**
- ✅ HTTPS implemented
- ✅ Safe browsing (no malware)
- ✅ Intrusive interstitial guidelines followed

### **4. Search Console Features to Use**

#### **A. URL Parameters**
Configure URL parameters to avoid duplicate content:
- `utm_source`, `utm_medium`, `utm_campaign` → No effect
- `ref`, `source` → No effect

#### **B. International Targeting**
- Set target country: South Korea
- Language: Korean (ko-KR)

#### **C. Security Issues**
- Monitor for security issues
- Check for hacked content
- Review manual actions

### **5. Performance Optimization**

#### **A. Page Speed Insights**
Test your pages with:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

#### **B. Mobile Usability**
- Test on various devices
- Check touch targets
- Verify text readability

### **6. Content Strategy for Search Console**

#### **A. Keyword Research**
- Use Search Console data to find new keywords
- Analyze search queries
- Monitor ranking improvements

#### **B. Content Gaps**
- Identify missing content opportunities
- Create content based on search queries
- Optimize existing content

#### **C. Link Building**
- Monitor backlinks
- Track referring domains
- Analyze anchor text distribution

### **7. Monitoring and Alerts**

#### **A. Set Up Alerts**
- Crawl errors
- Security issues
- Manual actions
- Coverage drops

#### **B. Regular Monitoring**
- Weekly performance reviews
- Monthly content audits
- Quarterly technical SEO reviews

### **8. Advanced Features**

#### **A. Rich Results Testing**
- Test structured data with [Rich Results Test](https://search.google.com/test/rich-results)
- Monitor rich results in Search Console
- Fix any structured data errors

#### **B. URL Parameters**
- Configure URL parameters
- Avoid duplicate content issues
- Optimize crawl budget

#### **C. Sitemaps**
- Monitor sitemap submission status
- Check for sitemap errors
- Update sitemaps when content changes

### **9. Troubleshooting Common Issues**

#### **A. Indexing Issues**
- Check robots.txt
- Verify sitemap submission
- Review crawl errors

#### **B. Performance Issues**
- Analyze Core Web Vitals
- Check mobile usability
- Review page experience

#### **C. Security Issues**
- Monitor security reports
- Check for manual actions
- Review hacked content reports

### **10. Success Metrics**

#### **A. Key Performance Indicators**
- Total clicks from search
- Average click-through rate
- Average position in search results
- Total impressions

#### **B. Content Performance**
- Top performing pages
- Search queries driving traffic
- Click-through rate by query
- Position improvements over time

#### **C. Technical Health**
- Crawl error rate
- Index coverage
- Mobile usability score
- Page speed score

---

## 🚀 **Next Steps**

1. **Verify your website** in Google Search Console
2. **Submit your sitemaps** (main + images)
3. **Set up monitoring** for key metrics
4. **Test your pages** with Rich Results Test
5. **Monitor performance** weekly

Your Next.js 15 blog is already well-optimized for search engines. These additional steps will help you maximize your visibility in Google Search Console.
