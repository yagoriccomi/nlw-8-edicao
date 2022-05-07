import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native'
import { ChatTeardropDots } from "phosphor-react-native"
import BottomSheet from '@gorhom/bottom-sheet'
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { theme } from '../../theme';
import { styles } from './styles';

import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from '../Copyright';

export type FeedbackType = keyof typeof feedbackTypes

export function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null)
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSend, setFeedbackSend] = useState(false)

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSend(false)
  }

  function handleFeedbackSend() {
    setFeedbackSend(true)
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          weight='bold'
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}

      >
        {
          feedbackSend
            ?
            <Success
              onSendAnotherFeedback={handleRestartFeedback}
            />
            :
            <>
              {
                feedbackType
                  ?
                  <Form
                    feedbackType={feedbackType}
                    onFeedbackCanceled={handleRestartFeedback}
                    onFeedbackSend={handleFeedbackSend}
                  />
                  :
                  <Options onFeedbackTypeChanged={setFeedbackType} />
              }
            </>
        }

        {/* <Options /> */}
        {/* <Success /> */}
        {/* <Form feedbackType='IDEA' /> */}
        {/* <Copyright/> */}

      </BottomSheet>

    </>
  );
}

export default gestureHandlerRootHOC(Widget)