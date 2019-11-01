package com.mycompany.myapp.repository;

import java.util.Optional;

import com.mycompany.myapp.domain.EstadoPersona;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EstadoPersona entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EstadoPersonaRepository extends JpaRepository<EstadoPersona, Long> {

}
