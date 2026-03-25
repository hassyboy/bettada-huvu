package com.bettadahuva.backend.controller;

import com.bettadahuva.backend.model.TourPackage;
import com.bettadahuva.backend.repository.TourPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
public class PackageController {

    @Autowired
    private TourPackageRepository tourPackageRepository;

    @GetMapping
    public List<TourPackage> getAllPackages() {
        return tourPackageRepository.findAll();
    }

    @PostMapping
    public TourPackage createPackage(@RequestBody TourPackage tourPackage) {
        return tourPackageRepository.save(tourPackage);
    }
}
