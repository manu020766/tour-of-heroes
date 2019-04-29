import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { HeroComponent } from './../../components/hero/hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { TestStore } from '../../../../testing/test.store';
import { HeroService } from '../../../../core/hero.service';
import { HeroMockService } from '../../../../core/hero.mock.service';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [HeroDetailComponent, HeroComponent],
      providers: [{ provide: Store, useClass: TestStore },
      { provide: HeroService, useClass: HeroMockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
