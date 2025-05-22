import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhatIBringComponent } from './home-what-i-bring.component';

describe('HomeWhatIBringComponent', () => {
  let component: HomeWhatIBringComponent;
  let fixture: ComponentFixture<HomeWhatIBringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWhatIBringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWhatIBringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
