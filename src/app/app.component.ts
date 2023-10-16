import { NgTemplateOutlet } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [NgTemplateOutlet], // buraya kullandığımız bu class'ı import etmeyi unutmamalıyız, standalone componentlerde çalışıyoruz....
  template: `AppComponent
  <br>
  <h2>AÇIKLAMA: Dikkat ederseniz ng-template görüntülenmiyor. Özel olarak talep edilmediği sürece de gösterilmeyecektir.</h2>
  <ng-container >
    ng-container içeriği burasıdır...
  </ng-container>
  <br>

  <ng-template >
    ng-template içeriği burasıdır...
  </ng-template>
  <br>

<h2>Açıklama 2: Dikkat ederseniz burada ng container içerisinde ng templade içeriği ngTemplateOutlet(mevcut ng-container içeriğini ezerek yükler) ile çağırılmıştır.Bu şekilde ngTemplate içeriğini görebilmekteyiz.Dikkat ederseniz ngcontainer içeriği görülmemektedir. ..</h2>

  <ng-container *ngTemplateOutlet="templateIcerik">
    ng-container2 içeriği burasıdır...
  </ng-container>
  <br>

  <ng-template #templateIcerik>
    ng-template2 içeriği burasıdır...
  </ng-template>
  
<br>

<h2>TemplateRef & ViewContainerRef ile ng-template'i Görüntüleme</h2>

<ng-template #templateIcerik3>
TemplateRef & VievContainerRef ile create ettirdiğimiz templateIcerik3 olarak referans ettiğimiz NgTemplate içeriği burada görüyoruz...
</ng-template>

<h3>Not :

if-else durumlarına göre şablon gösterimlernde ng-template biçilmiş kaftandır. Belirli şartlarda belirli template'leri gösterebiliriz. Aynı şekilde listeleme süreçlerinde ya da switch-casa yapılarında kullanılabilir. 




</h3>

  `,
})
export class AppComponent {
  @ViewChild("templateIcerik3",{read : TemplateRef}) _ngTemplateIcerik : TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

    ngAfterViewInit() {
      this.viewContainerRef.createEmbeddedView(this._ngTemplateIcerik);
    }
    
  
  
}

