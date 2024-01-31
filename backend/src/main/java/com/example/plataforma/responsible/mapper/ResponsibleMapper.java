package com.example.plataforma.responsible.mapper;

import com.example.plataforma.responsible.dto.ResponsibleResponseDTO;
import com.example.plataforma.responsible.entity.Responsible;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import com.example.plataforma.responsible.dto.ResponsibleRequestDTO;

@Mapper
public interface ResponsibleMapper {

    ResponsibleMapper INSTANCE = Mappers.getMapper(ResponsibleMapper.class);

    Responsible toModel(ResponsibleResponseDTO responsibleResponseDTO);

    Responsible toModel(ResponsibleRequestDTO responsibleRequestDTO);

    ResponsibleResponseDTO toDTO(Responsible responsible);
}
