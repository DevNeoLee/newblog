import React from 'react'

export default function Footer() {
  return (
    <footer class="footer pt-4 my-md-5 pt-md-5 border-top">
      <div class="row">
        <div class="col-6 col-md">
          <ul>
            <li><div class="text-muted mt-2 mb-4 d-flex"><a href="https://newblog-beta.vercel.app/travel"><span class="mr-1">© 뭐여행 </span></a></div></li>
            <li class="mb-4"><a target="_blank" href="https://newblog-beta.vercel.app/sitemap.xml" ><span class="mr-2">Sitemap</span><i class="fab fa-github fa-lg"></i></a></li>      								       
            <li class="mt-2 mb-4"><a target="_blank" href="https://unsplash.com/photos/man-taking-photo-of-hot-air-balloons-eOcyhe5-9sQ"><span class="mr-2">Photo by Mesut Kaya from Unsplash</span><i class="fab fa-linkedin fa-lg"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>    
  )
}
