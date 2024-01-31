package com.example.plataforma.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import com.example.plataforma.question.dto.QuestionRequestDTO;
import com.example.plataforma.question.dto.QuestionResponseDTO;
import com.example.plataforma.question.entity.Question;

@Mapper
public interface QuestionMapper {

    QuestionMapper INSTANCE = Mappers.getMapper(QuestionMapper.class);

    Question toModel(QuestionRequestDTO questionRequestDTO);

    Question toModel(QuestionResponseDTO questionResponseDTO);

    QuestionResponseDTO toDTO(Question question);
}
