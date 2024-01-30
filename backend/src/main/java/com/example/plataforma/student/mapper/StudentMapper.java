package com.example.plataforma.student.mapper;

import com.example.plataforma.student.entity.Student;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import com.example.plataforma.student.dto.StudentAccountDTO;

@Mapper
public interface StudentMapper {

    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    Student toModel(StudentAccountDTO studentAccountDTO);

    StudentAccountDTO toDTO(Student student);
}
