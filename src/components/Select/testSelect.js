import { ROOT_SELECT } from "../../constants/root";
import { Select } from "./Select";



export const selection = new Select(ROOT_SELECT, {
    placeholder: 'Выберите пожалуйста элемент',
    selectedId: '1',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'},
        {id: '4', value: 'React Native'},
        {id: '5', value: 'Next'},
        {id: '6', value: 'Nest'}
    ],
    onSelect(item) {
        console.log(item.value);
      
    }
});





