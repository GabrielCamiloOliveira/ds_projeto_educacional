package student.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import student.dto.StudentAccountDTO;
import student.entity.Student;

@Mapper
public interface StudentMapper {

    StudentMapper INSTANCE = Mappers.getMapper(StudentMapper.class);

    Student toModel(StudentAccountDTO studentAccountDTO);

    StudentAccountDTO toDTO(Student student);
}
