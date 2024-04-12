import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// Import the CloudinaryModule.
import {CloudinaryModule} from '@cloudinary/ng';
import { AssetInstanceComponent } from './assetInstance.component';
import { FullExampleComponent } from './fullexample.component';
import { QuickExampleComponent } from './quickexample.component';
import { QuickstartComponent } from './quickstart.component';
import { TransformationComponent } from './transformation.component';
import { PluginsComponent } from './plugins.component';
import { LazyloadComponent } from './lazyload.component';
import { ResponsiveComponent } from './responsive.component';
import { AccessibilityComponent } from './accessibility.component';
import { PlaceholderComponent } from './placeholder.component';
import { LazyloadPlaceholderComponent } from './lazyloadPlaceholder.component';
import { SyntaxOverviewComponent } from './syntaxOverview.component';
import { DeliveryTypeComponent } from './deliveryType.component';
import { TransformingYourImageComponent } from './transformingYourImage.component';
import { ChainingTransformationsComponent } from './chainingTransformations.component';
import { ResizingCroppingComponent } from './resizingCropping.component';
import { AutoGravityComponent } from './autoGravity.component';
import { ConvertingFormatExtensionComponent } from './convertingFormatExtension.component';
import { ConvertingFormatDeliveryComponent } from './convertingFormatDelivery.component';
import { AutoFormatComponent } from './autoFormat.component';
import { EffectsComponent } from './effects.component';
import { OverlaysComponent } from './overlays.component';
import { ImageOptimizationsComponent } from './imageOptimizations.components';
import { TransformingYourVideoComponent } from './transformingYourVideo.component';
import { VideoTransformationComponent } from './videoTransformation.component';
import { MediaEventVideoComponent } from './mediaEventVideo.component';
import { VideoPluginsComponent } from './videoPlugins.component';
import { VideoSourcesComponent } from './videoSources.component';
import { VideoPosterComponent } from './videoPoster.component';
import { VideoPosterAutoComponent } from './videoPosterAuto.component';
import { VideoExample1Component } from './videoExample1.component';
import { VideoExample2Component } from './videoExample2.component';
import { VideosComponent } from './videos/videos.component';
import { ImagesComponent } from './images/images.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CloudinaryModule, QuickstartComponent,
    QuickExampleComponent,
    FullExampleComponent,
    TransformationComponent,
    AssetInstanceComponent,
    PluginsComponent,
    LazyloadComponent,
    ResponsiveComponent,
    AccessibilityComponent,
    PlaceholderComponent,
    LazyloadPlaceholderComponent,
    SyntaxOverviewComponent,
    DeliveryTypeComponent,
    TransformingYourImageComponent,
    ChainingTransformationsComponent,
    ResizingCroppingComponent,
    AutoGravityComponent,
    ConvertingFormatExtensionComponent,
    ConvertingFormatDeliveryComponent,
    AutoFormatComponent,
    EffectsComponent,
    OverlaysComponent,
    ImageOptimizationsComponent,
    TransformingYourVideoComponent,
    VideoTransformationComponent,
    MediaEventVideoComponent,
    VideoPluginsComponent,
    VideoSourcesComponent,
    VideoPosterComponent,
    VideoPosterAutoComponent,
    VideoExample1Component,
    VideoExample2Component,
    ImagesComponent,
    VideosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cld-angular-docs-examples';
}
