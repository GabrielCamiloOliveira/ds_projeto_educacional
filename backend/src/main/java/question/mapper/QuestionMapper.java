package question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import question.dto.QuestionRequestDTO;
import question.dto.QuestionResponseDTO;
import question.entity.Question;

@Mapper
public interface QuestionMapper {

    QuestionMapper INSTANCE = Mappers.getMapper(QuestionMapper.class);

    Question toModel(QuestionRequestDTO questionRequestDTO);

    Question toModel(QuestionResponseDTO questionResponseDTO);

    QuestionResponseDTO toDTO(Question question);
}
