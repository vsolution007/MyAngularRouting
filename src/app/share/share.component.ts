import { Component, OnInit } from '@angular/core';
// import { MyserviceService } from '../services/myservice.service'
import { ImageData } from '../services/data'
import {Router, ActivatedRoute} from '@angular/router';
import { MetaService } from '@ngx-meta/core'

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  id:number;
  imageUrl:string;
  constructor(private route: ActivatedRoute,private meta:MetaService) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id']
    this.id=this.id-1;
    this.meta.setTag('twitter:title',ImageData[this.id].title)
    this.meta.setTag('twitter:description',ImageData[this.id].description)
    this.meta.setTag('twitter:image',ImageData[this.id].image_url)
    this.imageUrl=ImageData[this.id].image_url;
  }

}
