/// <reference types="react" />
import { Component } from 'react';
import { GestureResponderEvent } from "react-native";
export interface Props {
    x: number;
    y: number;
    onClick?: (evt: GestureResponderEvent) => void;
    onClickRelease?: (evt: GestureResponderEvent) => void;
    onClickCanceled?: (evt: GestureResponderEvent) => void;
    onDrag?: (evt: GestureResponderEvent) => void;
}
export interface State {
}
export default class ResponderElement extends Component<Props, State> {
    static defaultProps: Partial<Props>;
    releasedNaturally: boolean;
    render(): JSX.Element;
}
