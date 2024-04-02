import React from 'react'

export default function Footer() {
  return (
    <footer className="footer pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-6 col-md">
          <ul>
            <li><div className="text-muted mt-2 mb-4 d-flex"><a href="https://moyahug.com/travel"><span className="mr-1">© 뭐여행 </span></a></div></li>
            <li className="mb-4"><a target="_blank" href="https://moyahug.com/sitemap.xml" ><span className="mr-2">Sitemap</span><i className="fab fa-github fa-lg"></i></a></li>      								       
            <li className="mt-2 mb-4"><a target="_blank" href="https://unsplash.com/photos/man-taking-photo-of-hot-air-balloons-eOcyhe5-9sQ"><span className="mr-2">Photo by Mesut Kaya from Unsplash</span><i className="fab fa-linkedin fa-lg"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>    
  )
}
