import { Component, OnInit } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/ng';
import { AssetInstanceComponent } from '../assetInstance.component';
import { FullExampleComponent } from '../fullexample.component';
import { QuickExampleComponent } from '../quickexample.component';
import { QuickstartComponent } from '../quickstart.component';
import { TransformationComponent } from '../transformation.component';
import { PluginsComponent } from '../plugins.component';
import { LazyloadComponent } from '../lazyload.component';
import { ResponsiveComponent } from '../responsive.component';
import { AccessibilityComponent } from '../accessibility.component';
import { PlaceholderComponent } from '../placeholder.component';
import { LazyloadPlaceholderComponent } from '../lazyloadPlaceholder.component';
import { SyntaxOverviewComponent } from '../syntaxOverview.component';
import { DeliveryTypeComponent } from '../deliveryType.component';
import { TransformingYourImageComponent } from '../transformingYourImage.component';
import { ChainingTransformationsComponent } from '../chainingTransformations.component';
import { ResizingCroppingComponent } from '../resizingCropping.component';
import { AutoGravityComponent } from '../autoGravity.component';
import { ConvertingFormatExtensionComponent } from '../convertingFormatExtension.component';
import { ConvertingFormatDeliveryComponent } from '../convertingFormatDelivery.component';
import { AutoFormatComponent } from '../autoFormat.component';
import { EffectsComponent } from '../effects.component';
import { OverlaysComponent } from '../overlays.component';
import { ImageOptimizationsComponent } from '../imageOptimizations.components';


// Import the Cloudinary classes.
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';

// Import any actions required for transformations.
import {fill} from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CloudinaryModule, QuickstartComponent,
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
    ImageOptimizationsComponent
],
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit{
  img!: CloudinaryImage;

  ngOnInit() {

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'demo'
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    this.img = cld.image('docs/models');


    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.img.resize(fill().width(250).height(250));

  }
}
