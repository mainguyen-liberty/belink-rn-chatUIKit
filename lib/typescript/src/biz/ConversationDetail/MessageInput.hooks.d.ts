import * as React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import type { IconNameType } from '../../assets';
import type { BottomSheetNameMenuRef } from '../BottomSheetMenu';
import type { VoiceBarState } from '../VoiceBar';
import type { MessageInputEditMessageRef } from './MessageInputEditMessage';
import type { MessageInputProps, MessageInputRef, MessageInputState, SendVoiceProps } from './types';
export declare function useMessageInput(props: MessageInputProps, ref?: React.ForwardedRef<MessageInputRef>): {
    value: string;
    setValue: (text: string, op?: 'add_face' | 'del_face' | 'del_c', face?: string) => void;
    onClickedFaceListItem: (face: string) => void;
    onClickedDelButton: () => void;
    onClickedClearButton: () => void;
    onClickedEmojiButton: () => void;
    onClickedVoiceButton: () => void;
    inputRef: React.MutableRefObject<RNTextInput>;
    emojiHeight: number;
    emojiIconName: IconNameType;
    onFocus: () => void;
    onBlur: () => void;
    inputBarState: MessageInputState;
    changeInputBarState: (nextState: MessageInputState) => void;
    voiceBarRef: React.MutableRefObject<import("../..").ModalRef>;
    onCloseVoiceBar: () => void;
    onVoiceStateChange: (state: VoiceBarState) => void;
    onSelectSendVoice: (props: SendVoiceProps) => void;
    onRequestCloseMenu: () => void;
    menuRef: React.RefObject<BottomSheetNameMenuRef>;
    sendIconName: IconNameType;
    onClickedSend: () => void;
    onVoiceFailed: (error: {
        reason: string;
        error: any;
    }) => void;
    showQuote: boolean;
    onHideQuoteMessage: () => void;
    onRequestCloseEdit: () => void;
    editRef: React.MutableRefObject<MessageInputEditMessageRef>;
    onEditMessageFinished: (msgId: string, text: string) => void;
    quoteMsg: import("react-native-chat-sdk").ChatMessage | undefined;
    onClickedEmojiSend: () => void;
};
//# sourceMappingURL=MessageInput.hooks.d.ts.map