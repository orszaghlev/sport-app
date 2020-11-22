package com.deik.sportapp.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(entityManagerFactoryRef = "competitionsEntityManagerFactory", basePackages = {"com.deik.sportapp.match", "com.deik.sportapp.season", "com.deik.sportapp.team", "com.deik.sportapp.competition", "com.deik.sportapp.athlete", "com.deik.sportapp.event"}, transactionManagerRef = "competitionsTransactionManager")
public class SecondaryDatasourceConfiguration {

    @Bean(name = "datasource2")
    @ConfigurationProperties(prefix="competitions.datasource")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean(name = "competitionsEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean(EntityManagerFactoryBuilder builder, @Qualifier("datasource2") DataSource dataSource) {
        Map<String, Object> properties = new HashMap<>();
        properties.put("hibernate.hbm2ddl.auto", "update");
        properties.put("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
        return builder.dataSource(dataSource).properties(properties).packages("com.deik.sportapp.match", "com.deik.sportapp.season", "com.deik.sportapp.team", "com.deik.sportapp.competition", "com.deik.sportapp.athlete", "com.deik.sportapp.event").persistenceUnit("Competitions").build();
    }

    @Bean(name = "competitionsTransactionManager")
    public PlatformTransactionManager transactionManager(@Qualifier("competitionsEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }

}
