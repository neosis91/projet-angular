import {TestBed, inject} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { TranslateService } from './translate.service';

describe('TranslateService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [TranslateService]
        });
    });

    it('should be created', inject([TranslateService], (service: TranslateService) => {
        expect(service).toBeTruthy();
    }));

    describe('Translate', () => {
        it('API connection', inject([TranslateService], (service: TranslateService) => {
            service.getTranslationTesting("Hello").subscribe((successResult) => {
                expect(successResult).toBeDefined();
                expect(successResult.status).toBe(200);
            });
        }));


        it('should be created', inject([TranslateService], (service: TranslateService) => {
            service.getTranslation("Hello").subscribe((result) => {
                expect(result.text[0]).toEqual("Bonjour");
            });
        }));
    });

});
