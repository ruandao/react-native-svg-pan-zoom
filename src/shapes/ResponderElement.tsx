import React, {Component} from 'react';
import {G} from 'react-native-svg';
import {GestureResponderEvent} from "react-native";

const GView = G

export interface Props {
    x: number,
    y: number,
    onClick?: (evt: GestureResponderEvent) => void,
    onClickRelease?: (evt: GestureResponderEvent) => void,
    onClickCanceled?: (evt: GestureResponderEvent) => void,
    onDrag?: (evt: GestureResponderEvent) => void
}

export interface State {
}

export default class ResponderElement extends Component<Props, State> {

    public static defaultProps: Partial<Props> = {
        onClick: (evt: GestureResponderEvent) => {
        },
        onClickRelease: (evt: GestureResponderEvent) => {
        },
        onClickCanceled: (evt: GestureResponderEvent) => {
        },
        onDrag: (evt: GestureResponderEvent) => {
        }
    };

    releasedNaturally = true

    render() {
        return (
            <GView
                x={this.props.x}
                y={this.props.y}
                onStartShouldSetResponder={(evt) => true}
                onMoveShouldSetResponder={(evt) => false}
                onResponderGrant={(evt) => {
                    this.releasedNaturally = true
                    this.props.onClick(evt)
                }}
                onResponderTerminationRequest={(evt) => {
                    if (evt.nativeEvent.touches.length > 1) {
                        this.releasedNaturally = false
                        return true
                    }
                    this.props.onClickCanceled(evt)
                    return false
                }}
                onResponderMove={this.props.onDrag}
                onResponderRelease={(evt) => {
                    if (this.releasedNaturally) {
                        this.props.onClickRelease(evt)
                        this.releasedNaturally = true
                    }
                }}
            >
                {this.props.children}
            </GView>
        )
    }
}
