import { Map } from 'immutable';

// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// **** 액션 생섬함수 정의 Export 하는 이유는 나중에 컴포넌트와 연동
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// **** 초기상태 정의
const initialState = Map({
    color: 'red',
    number: 0,
});

// **** 리듀서 작성
export default function counter(state = initialState, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return state.set('color', action.color);
        case INCREMENT:
            return state.update('number', number => number + 1);
        case DECREMENT:
            return state.update('number', number => number - 1);
        default:
            return state;
    }
}