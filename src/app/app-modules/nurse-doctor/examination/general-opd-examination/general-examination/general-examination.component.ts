import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SetLanguageComponent } from 'app/app-modules/core/components/set-language.component';
import { HttpServiceService } from 'app/app-modules/core/services/http-service.service';

@Component({
  selector: 'nurse-general-examination',
  templateUrl: './general-examination.component.html',
  styleUrls: ['./general-examination.component.css']
})
export class GeneralExaminationComponent implements OnInit,DoCheck {

  @Input('generalExaminationForm')
  generalExaminationForm: FormGroup;

  selectConsciousness = [
    {
      name: 'Conscious',
      id: 1
    },
    {
      name: 'Semiconscious',
      id: 2
    },
    {
      name: 'Unconscious',
      id: 3
    }
  ];
    selectDangerSigns = [
    {
      name: `Fast Breathing`,
      id: 1

    }, {
      name: `Chest Indrawing`,
      id: 2

    }, {
      name: `Stridor`,
      id: 3

    },
    {
      name: `Grunt`,
      id: 4

    }, {
      name: `Respiratory Distress`,
      id: 5

    }, {
      name: `Cold & Calm peripheral pulses`,
      id: 6

    },

    {
      name: `Convulsions`,
      id: 7

    }, {
      name: `Hypothermia`,
      id: 8

    }, {
      name: `Delirium`,
      id: 9

    },
    {
      name: `Drowsy`,
      id: 10

    }, {
      name: `Uncontrolled Bleeding`,
      id: 11

    }, {
      name: `Hematemesis`,
      id: 12

    },
    {
      name: `Refusal of Feeds`,
      id: 13
    }
  ];

  selectCooperation = [
    {
      name: 'Cooperative',
      id: 1
    },
    {
      name: 'Irritable',
      id: 2
    },
    {
      name: 'Restless',
      id: 3
    }
  ];

  selectBuilt = [
    {
      name: 'Thin Built',
      id: 1
    },
    {
      name: 'Moderately Built',
      id: 2
    },
    {
      name: 'Heavy Built',
      id: 3
    }
  ];

  selectLymphNodes = [
    {
      name: 'Cervical LN',
      id: 1
    },
    {
      name: 'Axillary LN',
      id: 2
    },
    {
      name: 'Inguinal LN',
      id: 3
    },
    {
      name: 'Generalized',
      id: 4
    }
  ];

  selectTypeOfLymphadenopathy = [
    {
      name: 'Soft',
      id: 1
    },
    {
      name: 'Firm',
      id: 2
    },
    {
      name: 'Hard',
      id: 3
    },
    {
      name: 'Fluctuant',
      id: 4
    },
    {
      name: 'Matting',
      id: 5
    },
    {
      name: 'Fixed',
      id: 6
    },
    {
      name: 'Mobile',
      id: 7
    }
  ]

  selectExtentOfEdema = [
    {
      name: 'Foot',
      id: 1
    },
    {
      name: 'Leg',
      id: 2
    },
    {
      name: 'Facial Puffiness',
      id: 3
    },
    {
      name: 'Generalized',
      id: 4
    }
  ];
  visitCategory: string;
  hideForANCAndQC: boolean=true;
  languageComponent: SetLanguageComponent;
  currentLanguageSet: any;
  

  constructor(private fb: FormBuilder,
    private httpServiceService: HttpServiceService) { }

  ngOnInit() {
    this.fetchLanguageResponse();
  }
   ngOnChanges() {
  //    this.visitCategory = localStorage.getItem("visiCategoryANC");    
  //  if (this.visitCategory == 'ANC') {
  //     this.hideForANCAndQC = true;
    
  //   } else {
  //     this.hideForANCAndQC = false;
  //   }
  this.visitCategory = localStorage.getItem("visiCategoryANC");    
  let visitCategory2 = localStorage.getItem("visitCategory")
  if (this.visitCategory == 'ANC' || visitCategory2 == 'ANC') {
  // if (this.visitCategory == 'ANC') {
    this.hideForANCAndQC = true;
    
  } else {
    this.hideForANCAndQC = false;
  }

  }

  
  checkWithDangerSign() {
    this.generalExaminationForm.patchValue({ typeOfDangerSigns: null })
  }

  checkWithLymphadenopathy() {
    this.generalExaminationForm.patchValue({ lymphnodesInvolved: null });
    this.generalExaminationForm.patchValue({ typeOfLymphadenopathy: null });
  }
  checkWithEdema() {
    this.generalExaminationForm.patchValue({ extentOfEdema: null });
    this.generalExaminationForm.patchValue({ edemaType: null });
  }
  get dangerSigns() {
    return this.generalExaminationForm.controls['dangerSigns'].value;
  }

  get edema() {
    return this.generalExaminationForm.controls['edema'].value;
  }

  get lymphadenopathy() {
    return this.generalExaminationForm.controls['lymphadenopathy'].value;
  }

  get typeOfDangerSigns() {
    return this.generalExaminationForm.controls['typeOfDangerSigns'].value;
  }

  get extentOfEdema() {
    return this.generalExaminationForm.controls['extentOfEdema'].value;
  }

  get lymphnodesInvolved() {
    return this.generalExaminationForm.controls['lymphnodesInvolved'].value;
  }

  get typeOfLymphadenopathy() {
    return this.generalExaminationForm.controls['typeOfLymphadenopathy'].value;
  }

  get edemaType() {
    return this.generalExaminationForm.controls['edemaType'].value;
  }

  get quickening() {
    return this.generalExaminationForm.controls['quickening'].value;
  }
  get foetalmovements() {


    return this.generalExaminationForm.controls['foetalMovements'].value;

  }

  //BU40088124 12/10/2021 Integrating Multilingual Functionality --Start--
  ngDoCheck(){
    this.fetchLanguageResponse();
  }

  fetchLanguageResponse() {
    this.languageComponent = new SetLanguageComponent(this.httpServiceService);
    this.languageComponent.setLanguage();
    this.currentLanguageSet = this.languageComponent.currentLanguageObject; 
  }
  //--End--
}