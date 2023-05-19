import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsmaulHusnaPage } from './asmaul-husna.page';

describe('AsmaulHusnaPage', () => {
  let component: AsmaulHusnaPage;
  let fixture: ComponentFixture<AsmaulHusnaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsmaulHusnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsmaulHusnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
