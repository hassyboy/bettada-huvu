package com.bettadahuva.backend.config;

import com.bettadahuva.backend.model.TourPackage;
import com.bettadahuva.backend.repository.TourPackageRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    public CommandLineRunner loadData(TourPackageRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new TourPackage("Wayanad Retreat", "2 Days / 1 Night", "₹5,999", "https://images.unsplash.com/photo-1593693397690-362cb9615fc0?q=80&w=2069&auto=format&fit=crop"));
                repository.save(new TourPackage("Ooty Cloud Explorer", "3 Days / 2 Nights", "₹8,499", "https://images.unsplash.com/photo-1605553556557-de41405bb3b4?q=80&w=1964&auto=format&fit=crop"));
                repository.save(new TourPackage("Coorg Coffee Trails", "2 Days / 1 Night", "₹6,499", "https://images.unsplash.com/photo-1614088924190-7815aa02521f?q=80&w=1974&auto=format&fit=crop"));
                repository.save(new TourPackage("Chikmagaluru Peaks", "3 Days / 2 Nights", "₹7,999", "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop"));
            }
        };
    }
}
