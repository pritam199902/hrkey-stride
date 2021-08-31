const data = {
    "message": "Successfully fetched",
    "data": [
        {
            "task_id": 1,
            "module_code": "CPS",
            "source_name": "Orbis",
            "data_points": {
                "type": null,
                "level_1": [
                    {
                        "name": "Steven Patrick Allen",
                        "type": "Board of Directors; Senior management",
                        "bdate": "1971-05-21T00:00:00",
                        "gender": "M",
                        "addresss": "6 St James's Square, SW1Y 4AD, London, London, United Kingdom",
                        "nationality": "United Kingdom;Australia"
                    },
                    {
                        "name": "Matthew  Cox",
                        "type": "Board of Directors; Senior management",
                        "bdate": "1977-01-15T00:00:00",
                        "gender": "M",
                        "addresss": "6 St James's Square, SW1Y 4AD, London, London, United Kingdom",
                        "nationality": "United Kingdom"
                    },
                    {
                        "name": "John Patrick Kiddle",
                        "type": "Board of Directors; Senior management",
                        "bdate": "1972-12-31T00:00:00",
                        "gender": "M",
                        "addresss": "6 St James's Square, SW1Y 4AD, London, London, United Kingdom",
                        "nationality": "United Kingdom"
                    },
                    {
                        "name": "  RIO TINTO SECRETARIAT LIMITED",
                        "type": "Senior management",
                        "bdate": null,
                        "gender": null,
                        "addresss": "6 St James's Square, SW1Y 4AD, London, London, United Kingdom",
                        "nationality": null
                    }
                ],
                "legal_name": "RIO TINTO FINANCE PLC"
            }
        },
        {
            "task_id": 2,
            "module_code": "CPS",
            "source_name": "T-Rank",
            "data_points": {
                "id": "GB00358901",
                "type": "Financial Company",
                "level_1": {
                    "GB00425864": {
                        "parent_id": "GB00358901",
                        "legal_name": "RIO TINTO INTERNATIONAL HOLDINGS LIMITED",
                        "entity_type": "Corporate",
                        "shareholdPercentage": 99.99,
                        "integrated_ownership": 99.99
                    },
                    "GB00719885": {
                        "parent_id": "GB00358901",
                        "legal_name": "RIO TINTO PLC",
                        "entity_type": "Corporate",
                        "shareholdPercentage": null,
                        "integrated_ownership": 100
                    }
                },
                "level_2": {
                    "GB00719885": {
                        "parent_id": "GB00425864",
                        "legal_name": "RIO TINTO PLC",
                        "entity_type": "Corporate",
                        "shareholdPercentage": 100,
                        "integrated_ownership": 100
                    }
                },
                "legal_name": "RIO TINTO FINANCE PLC"
            }
        }
    ]
}

export default data