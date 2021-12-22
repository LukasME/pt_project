import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expedition } from '../shared/models/expedition.model';
import { filter } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BackendInterfaceService {

  public expeditions: Expedition[] = [
    {
      id: 0,
      slug: 'slovakia2015',
      title: 'Slovensko 2015',
      description: '',
      states: [],
      dateFrom: new Date('2015-07-24'),
      dateTo: new Date('2015-07-26'),
      previewPhotoUrls: ['assets/img/bcksk.jpg'],
      photoUrls: [],
      contentHTML: `
        <div class="container">
            <div class="row">
                <div class="section-story-overview">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="image-container" style="background-image: url('assets/img/login.jpg')"></div>
                            <br>
                            <p class="blockquote blockquote-primary">
                                "Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                                <br>
                                <br>
                                <small>-NOAA</small>
                            </p>
                            <div class="image-container" style="background-image: url('assets/img/bg3.jpg')"></div>
                        </div>
                        <div class="col-md-6">
                            <div class="image-container" style="background-image: url('assets/img/bg1.jpg')"></div>
                            <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                            <p>
                                The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the
                                world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                            </p>
                            <p>
                                For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures
                                rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
                            </p>
                            <p>
                                The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the
                                world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    },
    {
      id: 1,
      slug: 'balkans2016',
      title: 'Balkan 2016',
      description: '',
      states: [],
      dateFrom: new Date('2016-07-16'),
      dateTo: new Date('2016-07-27'),
      previewPhotoUrls: ['assets/img/bckbalkan6.jpg'],
      photoUrls: [],
      contentHTML: `<div class="section section-about-us">
        <div class="container">
            <div class="row">
            <div class="section-story-overview">
                <div class="row">
                    <div class="col-md-6">
                        <div class="image-container" style="background-image: url('assets/img/balkan/ro3.jpg')"></div>
                        <br>
                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                        <p>
                            The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                        </p>
                        <p>
                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
                        </p>
                        <p>
                            The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                        </p>
                        <div class="image-container" style="background-image: url('assets/img/balkan/mon3.jpg')"></div>
                    </div>
                    <div class="col-md-6">
                        <div class="image-container" style="background-image: url('assets/img/balkan/hr1.jpg')"></div>
                        <br>
                        <p class="blockquote blockquote-primary">
                            "Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                            <br>
                            <br>
                            <small>-NOAA</small>
                        </p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>`,
    },
    {
      id: 2,
      slug: 'norway2017',
      title: 'Nórsko 2017',
      description: '',
      states: [],
      dateFrom: new Date('2017-07-15'),
      dateTo: new Date('2017-07-29'),
      previewPhotoUrls: ['assets/img/bckexp.jpg'],
      photoUrls: [],
      contentHTML: `<div class="section section-about-us">
          <div class="container">
              <div class="section-story-overview">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="image-container image-left" style="background-image: url('assets/img/login.jpg')"></div>
                          <p class="blockquote blockquote-primary">
                              "Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                              <br>
                              <br>
                              <small>-NOAA</small>
                          </p>
                          <div class="image-container" style="background-image: url('assets/img/bg3.jpg')"></div>
                      </div>
                      <div class="col-md-6">
                          <div class="image-container image-right" style="background-image: url('assets/img/bg1.jpg')"></div>
                          <br>
                          <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                          <p>
                              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                          </p>
                          <p>
                              For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
                          </p>
                          <p>
                              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>`,
    },
    {
      id: 3,
      slug: 'westeurope2018',
      title: 'Západná Európa 2018',
      description: '',
      states: [],
      dateFrom: new Date('2016-07-15'),
      dateTo: new Date('2016-07-27'),
      previewPhotoUrls: ['assets/img/bckitfrs.jpg'],
      photoUrls: [],
      contentHTML: `<div class="section section-about-us">
          <div class="container">
              <div class="section-story-overview">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="image-container" style="background-image: url('assets/img/ifs/f2.jpg')"></div>
                          <p class="blockquote blockquote-primary">"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                              <br>
                              <br>
                              <small>-NOAA</small>
                          </p>
                          <div class="image-container" style="background-image: url('assets/img/ifs/i2.jpg')"></div>
                      </div>
                      <div class="col-md-6">
                          <div class="image-container" style="background-image: url('assets/img/ifs/s3.jpg')"></div>
                          <br>
                          <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                          <p>
                              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                          </p>
                          <p>
                              For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
                          </p>
                          <p>
                              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>`,
    },
    {
      id: 4,
      slug: 'ireland2019',
      title: 'Írsko 2019',
      description: '',
      states: [],
      dateFrom: new Date('2019-08-03'),
      dateTo: new Date('2016-08-09'),
      previewPhotoUrls: ['assets/img/bckir.jpg'],
      photoUrls: [],
      contentHTML: `<div class="section section-about-us">
          <div class="container">
              <div class="section-story-overview">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="image-container" style="background-image: url('assets/img/irl/irl5.jpg')"></div>
                          <p class="blockquote blockquote-primary">"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                              <br>
                              <br>
                              <small>-NOAA</small>
                          </p>
                          <div class="image-container" style="background-image: url('assets/img/irl/irl7.jpg')"></div>
                      </div>
                      <div class="col-md-6">
                          <div class="image-container" style="background-image: url('assets/img/irl/irl11.jpg')"></div>
                          <br>
                          <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                          <p>
                              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                          </p>
                          <p>
                              For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
                          </p>
                          <p>
                              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>`,
    },
    {
      id: 5,
      slug: 'slovakia2020',
      title: 'Slovensko 2020',
      description: '',
      states: [],
      dateFrom: new Date('2016-08-08'),
      dateTo: new Date('2016-08-13'),
      previewPhotoUrls: ['assets/img/bcksk2020.jpg'],
      photoUrls: [],
      contentHTML: `<div class="section section-about-us">
          <div class="container">
              <div class="section-story-overview">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="image-container" style="background-image: url('assets/img/sk2/sk3.jpg')"></div>
                          <p class="blockquote blockquote-primary">"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                              <br>
                              <br>
                              <small>-NOAA</small>
                          </p>
                          <div class="image-container" style="background-image: url('assets/img/sk2/sk7.jpg')"></div>
                      </div>
                      <div class="col-md-6">
                          <div class="image-container" style="background-image: url('assets/img/sk2/sk6.jpg')"></div>
                          <br>
                          <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                          <p>
                              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                          </p>
                          <p>
                              For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
                          </p>
                          <p>
                              The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>`,
    }
  ];

  constructor() { }

  getExpeditions(): Observable<Expedition[]> {
    return of(this.expeditions);
  }

  getExpeditionBySlug(slug: String): Observable<Expedition> {
    const expeditions: Expedition[] = filter(this.expeditions, function(item){
      return item.slug === slug;
    });
    return of(expeditions[0]);
  }
}
