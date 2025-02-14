import * as React from 'react';
import { OptionContext } from './options';
export { default as Avatar, AvatarStyle } from './avatar';
export { Option, OptionContext, allOptions } from './options';
export interface Props {
    avatarStyle: string;
    className?: string;
    style?: React.CSSProperties;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
}
export default class AvatarComponent extends React.Component<Props> {
    static childContextTypes: {
        optionContext: any;
    };
    private optionContext;
    getChildContext(): {
        optionContext: OptionContext;
    };
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    render(): any;
    private updateOptionContext;
}
export declare class Piece extends React.Component<Props> {
    static childContextTypes: {
        optionContext: any;
    };
    private optionContext;
    getChildContext(): {
        optionContext: OptionContext;
    };
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    render(): any;
    private updateOptionContext;
}
