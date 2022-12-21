package com.example.client.home;

import com.dncomponents.client.views.appview.AbstractActivity;
import com.example.client.greeting.GreetingPlace;

/**
 * @author nikolasavic
 */
public class HomeActivity extends AbstractActivity<HomeView, HomePlace> implements HomeView.HomePresenter {

    public HomeActivity(HomeView view, HomePlace place) {
        super(view, place);
    }

    @Override
    public void goToGreeting() {
        placeManager.goTo(new GreetingPlace());
    }
}