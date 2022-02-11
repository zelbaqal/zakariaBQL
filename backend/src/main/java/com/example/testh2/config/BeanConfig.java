package com.example.testh2.config;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author zakaria
 */
@Configuration
public class BeanConfig{



    @Bean
    public CsvMapper getCsvMapper(){
        return new CsvMapper();
    }


}
