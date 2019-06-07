import { Component, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component ({
    selector: 'email',
    template: '<a href="mailto: {{ email }}">{{ email }}</a>'
})

export class EmailComponent {
    @Input() email:string;
}