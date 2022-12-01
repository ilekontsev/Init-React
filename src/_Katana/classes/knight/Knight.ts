import BaseCharter from '../../baseClasses/BaseCharter';
import { OptionsObject } from '../../shared/interfaces/optionsCharter';

class Knight extends BaseCharter {
    public options: OptionsObject;
    constructor(options: OptionsObject) {
        super(options);
        this.options = options;

   
    }

}

export default Knight;
