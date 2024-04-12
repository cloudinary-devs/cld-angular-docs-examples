import { Component, OnInit } from '@angular/core';
import {CloudinaryModule} from '@cloudinary/ng';
import { TransformingYourVideoComponent } from '../transformingYourVideo.component';
import { VideoTransformationComponent } from '../videoTransformation.component';
import { MediaEventVideoComponent } from '../mediaEventVideo.component';
import { VideoPluginsComponent } from '../videoPlugins.component';
import { VideoSourcesComponent } from '../videoSources.component';
import { VideoPosterComponent } from '../videoPoster.component';
import { VideoPosterAutoComponent } from '../videoPosterAuto.component';
import { VideoExample1Component } from '../videoExample1.component';
import { VideoExample2Component } from '../videoExample2.component';

// Import the Cloudinary classes.
import {Cloudinary, CloudinaryVideo} from '@cloudinary/url-gen';

// Import any actions required for transformations.
import {fill} from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CloudinaryModule,
    TransformingYourVideoComponent,
    VideoTransformationComponent,
    MediaEventVideoComponent,
    VideoPluginsComponent,
    VideoSourcesComponent,
    VideoPosterComponent,
    VideoPosterAutoComponent,
    VideoExample1Component,
    VideoExample2Component,
],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit{
  vid!: CloudinaryVideo;

  ngOnInit() {

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'demo'
      }
    });


    // Use the video with public ID, 'elephants'.
    this.vid = cld.video('elephants');


    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.vid.resize(fill().width(250).height(250));

  }
}