package com.example.plataforma.activity.repository;

import com.example.plataforma.activity.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Long> { }