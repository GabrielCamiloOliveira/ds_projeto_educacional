package responsible.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import responsible.dto.ResponsibleRequestDTO;
import responsible.dto.ResponsibleResponseDTO;
import responsible.entity.Responsible;

@Mapper
public interface ResponsibleMapper {

    ResponsibleMapper INSTANCE = Mappers.getMapper(ResponsibleMapper.class);

    Responsible toModel(ResponsibleResponseDTO responsibleResponseDTO);

    Responsible toModel(ResponsibleRequestDTO responsibleRequestDTO);

    ResponsibleResponseDTO toDTO(Responsible responsible);
}
