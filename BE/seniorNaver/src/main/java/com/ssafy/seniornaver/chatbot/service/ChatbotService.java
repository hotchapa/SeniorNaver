package com.ssafy.seniornaver.chatbot.service;

import org.springframework.web.multipart.MultipartFile;

public interface ChatbotService {
    String convertSpeechToText(MultipartFile voiceFile);

    String talkToChatbot(String text);
}