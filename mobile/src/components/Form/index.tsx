import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";

import { FeedbackType } from "../Widget";
import { ScreenshotButton } from "../ScreenshotButton";
import { Button } from "../Button";

import { ArrowLeft } from "phosphor-react";
import { captureScreen } from "react-native-view-shot";
import { styles } from "./styles";
import { theme } from "../../theme";

import { feedbackTypes } from "../../utils/feedbackTypes";

interface Props {
    feedbackType: FeedbackType;
    onFeedbackCanceled: () => void;
    onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);
    const [screenshot, setScreenshot] = useState< string | null>(null);

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleScreenshot() {
        captureScreen({
            format: "jpg",
            quality: 0.8
        })
        .then((url) => setScreenshot(url))
        .catch((err) => console.log(err));
    }

    function handleScreenshotRemove() {
        setScreenshot(null);
    }

    async function handleSendFeedback() {
        if (isSendingFeedback) {
            return;
        }

        setIsSendingFeedback(true);

        try {
            
        } catch (err) {
            console.log(err);
            setIsSendingFeedback(false);            
        }
    }

    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity onPress={onFeedbackCanceled}>
                    <ArrowLeft 
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        source={feedbackTypeInfo.image} 
                        style={styles.image}
                    />
                    <Text style={styles.titleText} >
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput
                multiline
                style={styles.input}
                placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
                placeholderTextColor={theme.colors.text_secondary}
                autoCorrect={false}
            />

            <View style={styles.footer}>
                <ScreenshotButton 
                    onTakeShot={handleScreenshot}
                    onRemoveShot={handleScreenshotRemove}
                    screenshot={screenshot}
                />

                <Button 
                    onPress={handleSendFeedback}
                    isLoading={isSendingFeedback} 
                />
            </View>

        </View>
    );
}