import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestinoComponent } from './destino.component';

describe('DestinoComponent', () => {
  let component: DestinoComponent;
  let fixture: ComponentFixture<DestinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
