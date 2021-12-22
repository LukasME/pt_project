import { Component, OnInit } from '@angular/core';
import { Expedition } from '../../shared/models/expedition.model';
import { BackendInterfaceService } from '../../services/backend-interface.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-expedition',
  templateUrl: './expedition.component.html',
  styleUrls: ['./expedition.component.css']
})
export class ExpeditionComponent implements OnInit {

  expedition: Expedition;
  loading = false;

  constructor(
    private backendInterface: BackendInterfaceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getExpedition();
  }

  getExpedition(): void {
    this.loading = true;
    const expeditionIdentifier = this.route.snapshot.paramMap.get('identifier');
    this.backendInterface.getExpeditionBySlug( (expeditionIdentifier || '').toString() ).subscribe( data => {
      this.loading = false;
      this.expedition = data;
    });
  }

}
