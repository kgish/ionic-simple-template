import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.page.html',
    styleUrls: [ 'contact.page.scss' ]
})
export class ContactPage implements OnInit {

    private form: FormGroup;
    submitted: boolean;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            name: [ '', [Validators.required, Validators.minLength(5) ]],
            email: [ '', [Validators.required, Validators.email ]],
            message: [ '', [Validators.minLength(10)] ],
        });
    }

    submit() {
        console.log(this.form.value);
        if (this.submitted) {
            this.form.reset();
        }
        this.submitted = !this.submitted;
    }
}
