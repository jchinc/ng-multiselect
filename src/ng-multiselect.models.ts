export interface INgMultiselectItem {
    key: string;
    value: string;
    valueSecondary: string;
    selected: boolean;
    filters: string[]
}

export class NgMultiselectItem implements INgMultiselectItem {

    constructor(
        public key = '',
        public value = '',
        public valueSecondary = '',
        public selected = false,
        public filters: string[] = []
    ) { }
}