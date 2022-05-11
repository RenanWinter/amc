import { Injectable } from "@angular/core";
import { DialogService } from "../dialogs/services/dialog.service";
import { LoaderService } from "../loaders/services/loader.service";

@Injectable({ providedIn: 'root' })
export class UtilService {
  constructor(
    public loader: LoaderService,
    public dialog: DialogService
  ) { }
}
