package com.bettadahuva.backend.controller;

import com.bettadahuva.backend.model.Inquiry;
import com.bettadahuva.backend.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inquiries")
public class InquiryController {

    @Autowired
    private InquiryRepository inquiryRepository;

    @PostMapping
    public ResponseEntity<Inquiry> submitInquiry(@RequestBody Inquiry inquiry) {
        Inquiry savedInquiry = inquiryRepository.save(inquiry);
        return new ResponseEntity<>(savedInquiry, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }
}
