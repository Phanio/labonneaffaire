import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouerArticleComponent } from './ajouer-article.component';

describe('AjouerArticleComponent', () => {
  let component: AjouerArticleComponent;
  let fixture: ComponentFixture<AjouerArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouerArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouerArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
