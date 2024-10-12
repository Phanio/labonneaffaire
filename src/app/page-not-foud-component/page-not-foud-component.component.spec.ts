import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoudComponentComponent } from './page-not-foud-component.component';

describe('PageNotFoudComponentComponent', () => {
  let component: PageNotFoudComponentComponent;
  let fixture: ComponentFixture<PageNotFoudComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFoudComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNotFoudComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
